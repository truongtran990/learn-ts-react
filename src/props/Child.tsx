interface ChildProps {
  color: string;
}

/**
 * Child will be a React function component
 * Child might have properties assgned to it like propTypes and contextTypes
 * Child will receive props of type 'ChildProps'
 * @param param0 color props is passing from parent component
 * @returns React Functional Component
 */
export const Child: React.FC<ChildProps> = ({ color }) => {
  return <h1>{color}</h1>;
};
