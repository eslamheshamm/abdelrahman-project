type LayoutsProps = {
	children: any;
};
const Layouts: React.FC<LayoutsProps> = (props) => {
	return <main className="w-11/12 mx-auto">{props.children}</main>;
};
export default Layouts;
