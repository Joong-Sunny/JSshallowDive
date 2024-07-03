import Reference from './reference/Reference';

interface Decision {
  type: string;
  condition: string;
  source: {
    type: string;
    ref: Reference;
  };
  target: {
    type: string;
    ref: Reference;
  };
}

export default Decision;
