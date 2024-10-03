import React from "react";

import { TagsInput } from "@mantine/core";

import classes from "./TagsInput.module.scss";

export default function Tags({ ...restProps }: {} & React.ComponentProps<typeof TagsInput>) {
	return (
		<TagsInput
			classNames={{
				input: classes.input,
				label: classes.label,
				description: classes.description,
				error: classes.error,
			}}
			{...restProps}
		/>
	);
}
