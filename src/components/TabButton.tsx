interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

const TabButton = ({ active, selectTab, children }: TabButtonProps) => {
  const buttonClasses = active ? "border-b border-[#324056]" : "";

  return (
    <div>
      {" "}
      <button onClick={selectTab}>
        <p
          className={`mr-3 font-semibold hover:text-[#ADB7B3] ${buttonClasses}`}
        >
          {children}
        </p>
      </button>
    </div>
  );
};

export default TabButton;
