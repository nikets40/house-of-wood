const ModalView: React.FC = (props) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 h-[100vh] w-full z-50">
      {/* Content Box */}
      {props.children}
    </div>
  );
};

export default ModalView;
