import { makeObservable, observable } from "mobx";
import * as THREE from "three";

class MetaObject {
  groupId = "";
  type = "Object";
  name = "";
  transform = null;
  group = new THREE.Group()
  name_check_arr = [];
  url = null;

  constructor(
    objectId,
    name,
    transform,
    blobGlb,
    url,
    loadJSON,
    type,
    groupId
  ) {
    makeObservable(this, {
      objectId: observable,
      groupId: observable,
      name: observable,
      transform: observable,
      group: observable,
    });
    const tempGroup = new THREE.Group()
    console.log("debug1", this.group)
    this.group = tempGroup
    console.log("debug2", this.group)

    tempGroup.isRoot = true;
    this.groupId = groupId;
    this.url = url;
    this.type = type;

    this.name_check_arr.sort(function (a, b) {
      return a - b;
    });
    this.transform = transform;
    if (transform != null) {
      tempGroup.position.set(
        transform.position.x,
        transform.position.y,
        transform.position.z
      );
      tempGroup.rotation.set(
        transform.rotation.x,
        transform.rotation.y,
        transform.rotation.z
      );
      tempGroup.scale.set(
        transform.scale.x,
        transform.scale.y,
        transform.scale.z
      );
    } else {
      tempGroup.position.set(0, 0, 0);
      tempGroup.rotation.set(0, 0, 0);
      tempGroup.scale.set(1, 1, 1);
    }
    this.group = observable(tempGroup);
    console.log("debug0.5", this.group)
  }
}

export default MetaObject;
