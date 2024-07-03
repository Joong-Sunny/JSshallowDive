import Reference from './Reference';

interface ObjectReference extends Reference {
  type: 'object';
  value: string;
  property: string;
}

interface SceneReference extends Reference {
  type: 'scene';
  value: string;
}

interface SceneSettingReference extends Reference {
  type: 'sceneSetting';
  value: string;
}

interface LightReference extends Reference {
  type: 'light';
  value: string;
}

interface CameraReference extends Reference {
  type: 'camera';
  value: string;
}

type ConcreteReference =
  | ObjectReference
  | SceneReference
  | SceneSettingReference
  | LightReference
  | CameraReference;

export default ConcreteReference;
export type {
  ObjectReference,
  SceneReference,
  SceneSettingReference,
  LightReference,
  CameraReference,
  ConcreteReference
};
