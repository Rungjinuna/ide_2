import 'react-complex-tree/lib/style-modern.css';
import {
  StaticTreeDataProvider,
  Tree,
  UncontrolledTreeEnvironment,
} from 'react-complex-tree';

export default function FileTree() {
  const items = {
    root: {
      index: 'root',
      isFolder: true,
      children: ['child1', 'child2'],
      data: 'Root item',
    },
    child1: {
      index: 'child1',
      children: [],
      data: 'Child item 1',
    },
    child2: {
      index: 'child2',
      isFolder: true,
      children: ['child3'],
      data: 'Child item 2',
    },
    child3: {
      index: 'child3',
      children: [],
      data: 'Child item 3',
    },
  };

  const dataProvider = new StaticTreeDataProvider(items, (item, newName) => ({
    ...item,
    data: newName,
  }));

  return (
    <div className='max-w-sm p-4 bg-white rounded-lg border border-gray-200 shadow-lg'>
      <UncontrolledTreeEnvironment
        dataProvider={dataProvider}
        getItemTitle={(item) => item.data}
        viewState={{}}
        canDragAndDrop={true}
        canDropOnFolder={true}
        canReorderItems={true}
      >
        <Tree treeId='tree-2' rootItem='root' treeLabel='Tree Example' />
      </UncontrolledTreeEnvironment>
    </div>
  );
}
