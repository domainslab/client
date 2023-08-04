/* eslint-disable @typescript-eslint/ban-ts-comment */
import { fromDashedToCamelCase } from 'utils/fromDashedToCamelCase';

const IconsGlob = import.meta.glob('./../../../assets/icons/*.svg', {
  eager: true,
});

const Icons: React.FC = () => {
  const onIconClick = (path: string) => async () => {
    const filename = path.split('/').slice(-1)[0];
    const iconName = fromDashedToCamelCase(filename.split('.svg')[0]);
    const importString = `import { ReactComponent as ${iconName}Icon } from 'assets/icons/${filename}';`;

    try {
      await navigator.clipboard.writeText(importString);
      alert(importString + '\n\ncopied to your clipboard!');
    } catch (e) {
      alert('Error while copying to clipboard');
    }
  };

  return (
    <>
      <h2 className="text-2xl my-4">Icons</h2>
      <div className="flex gap-4">
        {Object.entries(IconsGlob).map(([path, module], key) => {
          //@ts-ignore
          const Icon = module.ReactComponent;
          return (
            <div
              onClick={onIconClick(path)}
              key={key}
              className="w-[40px] h-[40px] bg-LightBg1 hover:bg-LightBg2 flex justify-center items-center rounded-[5px] cursor-pointer"
            >
              <Icon className="w-[20px] h-[20px]" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Icons;
