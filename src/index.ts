import { LinkedList } from './LinkedList';
import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { CharacterCollection } from './CharacterCollection';

const numberCollection = new NumberCollection([10, 4, 5, -1]);
numberCollection.sort();
const characterCollection = new CharacterCollection('efFjt');
characterCollection.sort();
const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(-1)
linkedList.add(0)
linkedList.add(40)
linkedList.sort()


//const sorter = new Sorter(numberCollection);
//const sorter = new Sorter(characterCollection);

console.log(numberCollection.data);
console.log(characterCollection.data);
linkedList.print();

