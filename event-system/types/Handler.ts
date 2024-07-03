import Decision from './Decision';
import Method from './method/Method';

interface Handler {
  decisions: Decision[];
  methods: Method<unknown>[];
}

export default Handler;
