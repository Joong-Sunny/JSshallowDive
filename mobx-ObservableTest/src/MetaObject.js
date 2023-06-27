import { makeObservable, observable } from "mobx";
import * as THREE from "three";

class Group {
  group = new THREE.Group();

  constructor(transform) {
    if (transform != null) {
      this.group.position.set(
        transform.position.x,
        transform.position.y,
        transform.position.z
      );
      this.group.rotation.set(
        transform.rotation.x,
        transform.rotation.y,
        transform.rotation.z
      );
      this.group.scale.set(
        transform.scale.x,
        transform.scale.y,
        transform.scale.z
      );
    } else {
      this.group.position.set(0, 0, 0);
      this.group.rotation.set(0, 0, 0);
      this.group.scale.set(1, 1, 1);
    }
  }
}

class MetaObject {
  groupId = "";
  type = "Object";
  name = "";
  transform = null;
  groupWrapper = null;
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
      groupId: observable,
      name: observable,
      transform: observable,
      group: observable,
    });

    const tempGroup = new Group(transform);
    this.group = observable(tempGroup);
    this.groupId = groupId;
    this.url = url;
    this.type = type;

    this.name_check_arr.sort(function (a, b) {
      return a - b;
    });
    this.transform = transform;
  }
}

export default MetaObject;
