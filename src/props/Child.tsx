interface ChildProps {
  color: string;
  onClick: () => void;
  children: React.ReactNode;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <>
      <h1>{color}</h1>
      <button onClick={onClick}>Click me</button>
    </>
  );
};

/**
 * Child will be a React function component
 * Child might have properties assgned to it like propTypes and contextTypes
 * Child will receive props of type 'ChildProps'
 * @param param0 color props is passing from parent component
 * @returns React Functional Component
 */
export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <>
      <h1>{color}</h1>
      {children}
      <br />
      <button onClick={onClick}>Click me</button>
    </>
  );
};
