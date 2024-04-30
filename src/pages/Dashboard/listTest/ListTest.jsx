/* eslint-disable react/prop-types */


const ListTest = ({test, i}) => {
    const {name, price} = test;
    return (
        <tr className="hover:bg-gray-200 rounded border-b border-gray-200">
      <th className="border-r border-gray-200">{i + 1}</th>
      <td className="border-r border-gray-200">{name}</td>
      <td>
      <div className="join">
  <input className="input input-bordered join-item" type="number" defaultValue={price}/>
  <button className="btn join-item rounded-r bg-gray-300">BDT</button>
</div>
      </td>
    </tr>
    );
};

export default ListTest;