import * as React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {WithSortable} from './with-sortable';
import {arrayMove} from '../data-structures/array-move';

interface ITestItem {
	name: string;
}

type IProps = {};

interface IState {
	items: Array<ITestItem>;
}

class Demo extends React.PureComponent<IProps, IState> {
	constructor(props: IProps) {
		super(props);

		this.state = {
			items: [
				{name: 'item 1'},
				{name: 'item 2'},
				{name: 'item 3'},
				{name: 'item 4'},
				{name: 'item 5'},
			],
		};
	}
	render() {
		return (
			<WithSortable
				items={this.state.items}
				itemTemplate={({item}) => <div style={{margin: 4, border: '1px solid red'}}>{item.name}</div>}
				getId={(item) => item.name}
				options={{
					onSortEnd: ({oldIndex, newIndex}) => {
						this.setState({
							items: arrayMove(this.state.items, oldIndex, newIndex),
						});
					},
				}}
			/>
		);
	}
}

const meta: Meta<typeof WithSortable> = {
	title: 'HOC/WithSortable',
	component: WithSortable,
	decorators: [
		(Story) => (
			<div style={{width: 300}}>
				<Story />
			</div>
		),
	],
};

export default meta;

type Story = StoryObj<typeof WithSortable>;

export const Main: Story = {
	render: () => <Demo />,
};
