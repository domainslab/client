import ColorsLibrary from 'assets/colors';

const Colors: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl my-4">Colors</h2>
      {Object.entries(ColorsLibrary).map(([colorName, colorCode], key) => (
        <div
          key={key}
          className="flex"
        >
          <div className="shrink-0 w-[150px]">{colorName}</div>
          <div
            className="shrink-0 w-[200px]"
            style={{ color: colorCode }}
          >
            {colorCode}
          </div>
          <div
            className="w-full"
            style={{ background: colorCode }}
          ></div>
        </div>
      ))}
    </>
  );
};

export default Colors;
