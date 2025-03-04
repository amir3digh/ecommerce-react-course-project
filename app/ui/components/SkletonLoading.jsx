export default function SkletonLoading() {
  return (
    <div className="animate-pulse flex flex-col gap-4 p-4 rounded-xl w-[300px] h-[400px] bg-gray-100">
      <div className="w-full h-[200px] bg-gray-300"></div>
      <div className="w-full h-8 bg-gray-300"></div>
      <div className="w-[70%] h-6 bg-gray-300"></div>
      <div className="w-[50%] h-6 bg-gray-300"></div>
    </div>
  );
}
