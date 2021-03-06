import firebase from "firebase";
import firebaseContainer from "./firebaseConfig";
import MemberModelManage from "./MemberModel";

// manage class
// singleton, call getInstance() to get an instace
export class FamilyAccountModelManage{

  static _managePart = null;
  _path = "FamilyAccount";
  _accountPath = "FamilyAccount";

  // get instance
  static getInstance(){
    firebaseContainer.getInstance().justStart();
    if(this._managePart == null){
      this._managePart = new FamilyAccountModelManage();
    }
    return this._managePart;
  }

  // get family account
  // takes a familyAccountModel
  getFamilyAccount(callback){
    let familyAccountRef = firebase.database().ref(this._path);
    familyAccountRef.once("value").then((snapshota) => {
      snapshot = snapshota.val();
      let familyAccount = new FamilyAccount(snapshot);
      callback(familyAccount);

    });
  }

  // check if comments count reaches a certain limit
  // to unlock achievement
  checkCommentCount(callback, count) {
    let commentRef = firebase.database().ref(this._path + "/" + "comments/");
    commentRef.once("value").then((snapshot) => {
      if (snapshot.val() === count) {
        // we unlock the achievement when directing from add member guide to homepage
        callback(true);
      } else {
        callback(false);
      }
    });
  }

  // update comment + 1
  increaseComment(callback) {
    let commentRef = firebase.database().ref(this._path + '/' + 'comments/');
    commentRef.once("value").then((snapshot) => {
      // set comment
      commentRef.set(snapshot.val() + 1);
      callback(true);
    });
  }

  // set photo
  setPhoto(callback, newPhoto) {
    let photoRef = firebase.database().ref(this._accountPath + '/avatar/');
    photoRef.once("value").then((snapshot) => {
      // set like
      photoRef.set(newPhoto);
    });
  }

}


// family account model
// contains information for family account and the function to modify
export class FamilyAccount{

  avatar = "-1";
  dateCreated = 0;
  email = "";
  familyMember = [];
  name = "";
  _path = "FamilyAccount"

  constructor(accountObject){
    this.avatar = accountObject["avatar"];
    this.dateCreated = accountObject["dateCreated"];
    this.email = accountObject["email"];
    this.familyMember = accountObject["familyMember"];
    this.name = accountObject["name"];
    this.achievement = accountObject["achievement"];
  }

  member = {}

  // to normal javascript object with only information
  toObject(){
    return {
      achievement: this.achievement,
      avatar: this.avatar,
      dateCreated: this.dateCreated,
      email: this.email,
      familyMember: this.familyMember,
      name: this.name
    }
  }

  // get all members
  // callback is called after getting them
  // callback should be a function that takes a list of memberModel
  getMembers(callback){
    if(Object.keys(this.member).length != this.familyMember.length){
      for (let member of Object.keys(this.familyMember)) {
        
        MemberModelManage.getInstance().getMember((memberModel) => {
          this.member[this.familyMember[member]] = memberModel
          
          if(Object.keys(this.member).length == Object.keys(this.familyMember).length){
            callback(this.member)
          }

        }, 
        this.familyMember[member])
      }
    }else{
      callback(this.member)
    }
  }

  // del member
  delMember(callback, memberId){
      for(let i of Object.keys(this.familyMember)){
        if (this.familyMember[i] == memberId){
          delete this.familyMember[i]
          delete this.member[memberId]
          firebase.database().ref(this._path + "/familyMember" + "/" + i).remove().then(() => callback(this));
          break;
        }
      }
  }
}

export default FamilyAccountModelManage;