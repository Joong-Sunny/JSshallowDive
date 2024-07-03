import Method from './Method';
import * as THREE from 'three';
import MethodParameter from './MethodParameter';

/**
 * @description 포지션 설정 메소드의 파라미터 타입
 * [오브젝트 id, 포지션(vector3)]
 *
 */
type ParameterSetObjectPosition = MethodParameter<
  [string, THREE.Vector3 | { x: number; y: number; z: number }]
>;
interface MethodSetObjectPosition extends Method<ParameterSetObjectPosition> {
  type: 'setObjectPosition';
}

/**
 * @description 로테이션 설정 메소드의 파라미터 타입
 * [오브젝트 id, 로테이션(vector3)]
 *
 */
type ParameterSetObjectRotation = MethodParameter<
  [string, THREE.Vector3 | { x: number; y: number; z: number }]
>;
interface MethodSetObjectRotation extends Method<ParameterSetObjectRotation> {
  type: 'setObjectRotation';
}

/**
 * @description 씬 이동 메소드의 파라미터 타입
 * [씬 id, 기존 씬 리셋 여부(boolean)]
 *
 */
type ParameterChangeScene = MethodParameter<[string, boolean]>;
interface MethodChangeScene extends Method<ParameterChangeScene> {
  type: 'changeScene';
}

type ConcreteMethod =
  | MethodSetObjectPosition
  | MethodSetObjectRotation
  | MethodChangeScene;

type ConcreteMethodNames =
  | 'setObjectPosition'
  | 'setObjectRotation'
  | 'changeScene';

export default ConcreteMethod;

export type {
  MethodSetObjectPosition,
  MethodSetObjectRotation,
  ConcreteMethodNames
};
