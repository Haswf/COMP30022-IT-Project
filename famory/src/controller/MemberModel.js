import firebase from "firebase";
import firebaseContainer from "./firebaseConfig";
import ItemModelManage from "./ItemModel"

// manage class
// singleton, call getInstance() to get an instace
export class MemberModelManage{
  static _managePart = null;
  _path = "FamilyMember";

  // get instance
  static getInstance(){
    firebaseContainer.getInstance().justStart();
    if(this._managePart == null){
      this._managePart = new MemberModelManage();
    }
    return this._managePart;
  }

  // get member by id, then call callBack
  // callBack should be a function that takes a memberModel
  getMember(callBack, id){
    let memberRef = firebase.database().ref(this._path + "/" + id);
    memberRef.once("value").then((snapshotGot) => {
      snapshot = snapshotGot.val();
      let member = new Member(snapshot, id);
      callBack(member);
    });
  }

  // add member
  setMember(callback, details, familyAccountModel){
    memberIds = Object.keys(familyAccountModel.familyMember).map((a) => Number(a))

    familyMemberId = Math.max.apply(null, memberIds) + 1
    nextId = familyMemberId
    firebase.database().ref(this._path + "/" + "curMember/").once("value").then((maxMember) => {
      let maxId = maxMember.val()
      let newMemberId = "member_" + (Number(maxId) + 1)
      firebase.database()
        .ref(this._path + "/" + newMemberId).set(details)
      firebase.database()
        .ref(familyAccountModel._path + "/familyMember" + "/" + nextId.toString()).set(newMemberId)
      firebase.database()
        .ref(this._path + "/" + "curMember/").set((Number(maxId) + 1))
      let member = new Member(details, newMemberId);

      familyAccountModel.member[newMemberId] = member;
      familyAccountModel.familyMember[nextId.toString()] = newMemberId;

      callback(familyAccountModel)
    });
  }

  passItem(callback, newMemberModel, itemModel){
    itemIds = Object.keys(newMemberModel.item).map((a) => Number(a))

    let itemId = Math.max.apply(null, itemIds) + 1

    if(Object.keys(newMemberModel.item).length == 0){
      itemId = 0
    }

    firebase.database().ref(newMemberModel._path + "/" + "item/" + itemId.toString() + "/").set(
      {id: itemModel.itemId, type: itemModel.type}).then( () => callback()
    )
  }

  // update profile
  setProfile(callback, newModel) {
    let memberId = newModel.memberId;
    let firstNameRef = firebase.database().ref(this._path + "/" + memberId + "/firstName");
    firstNameRef.set(newModel.firstName);
    let lastNameRef = firebase.database().ref(this._path + "/" + memberId + "/lastName");
    lastNameRef.set(newModel.lastName);
    let dobRef = firebase.database().ref(this._path + "/" + memberId + "/dob");
    dobRef.set(newModel.dob);
    let imageRef = firebase.database().ref(this._path + "/" + memberId + "/profileImage");
    imageRef.set(newModel.profileImage);

    callback();
  }

  // check if member count reaches a certain limit
  // to unlock achievement
  checkMemberCount(callback, count) {
    let memberRef = firebase.database().ref(this._path + "/" + "curMember/");
    memberRef.once("value").then((snapshot) => {
      if (snapshot.val() === count) {
        // we unlock the achievement when directing from add member guide to homepage
        callback(true);
      } else {
        callback(false);
      }
    });
  }
}

// member model
// contains information for member and the function to modify
export class Member {

  role = 'Member';
  gender = 'N/A';

  constructor(snapshot, id){
    this.role = snapshot["role"];
    this.dob = snapshot["dob"];
    this.firstName = snapshot["firstName"];
    this.gender = snapshot["gender"];
    this.generation = snapshot["generation"];
    this.item = snapshot["item"]? snapshot["item"]: {};
    this.lastName = snapshot["lastName"];
    this.profileImage = snapshot["profileImage"];
    this.ringColor = snapshot["ringColor"];
    this.memberId = id;
    this._path = "FamilyMember" + "/" + id;
  }

  // to normal javascript object with only information
  toObject(){
    return {
      dob: this.dob,
      firstName: this.firstName,
      gender: this.gender,
      generation: this.generation,
      item: this.item,
      lastName: this.lastName,
      profileImage: this.profileImage,
      ringColor: this.ringColor,
      id: this.memberId,
    }
  }

  items = {}

  // update first name
  updateFirstName = (newFirstName) => {
    firebaseContainer.getInstance().justStart();
    let MemberReference = firebase.database().ref(this._path + "/firstName");
    MemberReference.set(newFirstName);
  }

  updateSelf = (callback) => {
    MemberModelManage.getInstance().getMember((newSelf) => {
      this.firstName = newSelf.firstName
      this.item = newSelf.item
      this.items = {}

      callback(this)
    }, this.memberId)
  }

  deleteItem = (callback, itemModel) => {
    let descrip = {id: itemModel.itemId, type: itemModel.type}
    for(let i of Object.keys(this.item)){
      if (this.item[i]["id"] == descrip.id){
        delete this.item[i]
        firebase.database().ref(this._path + "/item" + "/" + i).remove().then(() => callback());
        break;
      }
    }
  }

  // get all items
  // then call callback
  // callback should be a function that takes a list of itemModel
  getItems(callback){
    if(Object.keys(this.items).length != this.item.length){
      for (let item of Object.keys(this.item)) {
        ItemModelManage.getInstance().getItem((itemModel) => {
          this.items[item] = itemModel
          
          if(Object.keys(this.items).length == Object.keys(this.item).length){
            
            callback(this.items)
          }

        }, this.item[item])
      }
    }else{
      callback(this.items)
    }
  }
}

export default MemberModelManage;
