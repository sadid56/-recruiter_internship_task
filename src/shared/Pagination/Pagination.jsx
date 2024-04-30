
const Pagination = () => {
    return (
        <div className="w-ful flex justify-center">
        <div className="join border rounded-none my-5">
          <button className="join-item btn">«</button>
          <button className="join-item btn bg-primary text-white rounded-md">
            1
          </button>
          <button className="join-item btn">2</button>
          <button className="join-item btn">3</button>
          <button className="join-item btn">»</button>
        </div>
        </div>
    );
};

export default Pagination;