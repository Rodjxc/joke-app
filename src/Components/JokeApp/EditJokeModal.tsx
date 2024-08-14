import { Modal, Form, Input, Checkbox } from "antd";
import type { Joke } from "../../client/apiTypes";

interface EditJokeModalProps {
	visible: boolean;
	joke: Joke | null;
	onSave: () => void;
	onCancel: () => void;
}

export const EditJokeModal: React.FC<EditJokeModalProps> = ({
	visible,
	joke,
	onSave,
	onCancel,
}) => {
	const [form] = Form.useForm();

	return (
		<Modal
			title="Edit Joke"
			open={visible}
			onOk={() => form.submit()}
			onCancel={onCancel}
		>
			<Form form={form} initialValues={joke} onFinish={onSave}>
				<Form.Item name="joke" label="Joke">
					<Input />
				</Form.Item>
				<Form.Item name={["flags", "nsfw"]} valuePropName="checked">
					<Checkbox>NSFW</Checkbox>
				</Form.Item>
				<Form.Item name={["flags", "explicit"]} valuePropName="checked">
					<Checkbox>Explicit</Checkbox>
				</Form.Item>
				<Form.Item name={["flags", "racist"]} valuePropName="checked">
					<Checkbox>Racist</Checkbox>
				</Form.Item>
				<Form.Item name={["flags", "religious"]} valuePropName="checked">
					<Checkbox>Religious</Checkbox>
				</Form.Item>
				<Form.Item name={["flags", "sexist"]} valuePropName="checked">
					<Checkbox>Sexist</Checkbox>
				</Form.Item>
			</Form>
		</Modal>
	);
};
