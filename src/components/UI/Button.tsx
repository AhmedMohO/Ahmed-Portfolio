import Link, { LinkProps } from "next/link";
import Magnetic from "./Magnatic";
import { ComponentPropsWithoutRef } from "react";

type ButtonProps = {
	classNameProps?: string;
	classNamePropsTwo?: string;
	li?: false;
	a?: false;
	link?: never;
} & ComponentPropsWithoutRef<"button">;

type LiAnchorProps = {
	classNameProps?: string;
	classNamePropsTwo?: string;
	li: true;
	a?: false;
	link: string;
} & ComponentPropsWithoutRef<"a"> &
	Partial<LinkProps>;

type AnchorProps = {
	classNameProps?: string;
	classNamePropsTwo?: string;
	li?: false;
	a: true;
	link: string;
} & ComponentPropsWithoutRef<"a">;

type Props = ButtonProps | LiAnchorProps | AnchorProps;

const Button = ({
	li,
	a,
	classNameProps,
	classNamePropsTwo,
	children,
	...props
}: Props) => {
	const classes = `flex w-full h-full ${classNameProps ? classNameProps : ""}`;
	const classesTwo = `rounded-full items-center justify-center p-3 bg-[var(--main-color)] overflow-hidden ${
		classNamePropsTwo ? classNamePropsTwo : ""
	}`;

	if (li) {
		const { link, ...anchorProps } = props as AnchorProps;
		return (
			<Magnetic className={classesTwo}>
				<Link href={link} className={classes} {...anchorProps}>
					{children}
				</Link>
			</Magnetic>
		);
	}

	if (a) {
		const { link, ...LiAnchorProps } = props as LiAnchorProps;
		return (
			<Magnetic className={classesTwo}>
				<a href={link} className={classes} {...LiAnchorProps}>
					{children}
				</a>
			</Magnetic>
		);
	}

	const buttonProps = props as ComponentPropsWithoutRef<"button">;
	return (
		<Magnetic className={classesTwo}>
			<button {...buttonProps} className={classes}>
				{children}
			</button>
		</Magnetic>
	);
};

export default Button;
