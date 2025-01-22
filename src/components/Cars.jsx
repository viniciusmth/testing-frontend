export default function Cars(props) {
  return (
    <ul className="space-y-4 bg-slate-800 p-3 rounded-lg shadow-black shadow-md">
      {props.title.map((car) => {
        return (
          <li className="font-helvetica font-normal text-1xl text-slate-300 bg-slate-700 p-2 rounded-md">
            {car.title}
          </li>
        );
      })}
    </ul>
  );
}
