import {MyLabel} from "../../components/MyLabel";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: "Components/MyLabel",
    component: MyLabel,
    argTypes: {
        size: {
            control: {
                type: "select"
            }
        },
        color: {
            control: {
                type: "select"
            }
        },
        fontColor: {
            control: {
                type: "color"
            }
        },
        backgroundColor: {
            control: {
                type: "color"
            }
        }
    }
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = props => <MyLabel {...props}/>;

export const Basic = Template.bind({});
Basic.args = {
    label: "No Label",
    size: 'normal',
    allCaps: false
};

export const AllCaps = Template.bind({});
AllCaps.args = {
    label: "No Label",
    size: 'normal',
    allCaps: true
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: "No Label",
    size: 'normal',
    color: 'secondary',
};

export const Terciary = Template.bind({});
Terciary.args = {
    label: "No Label",
    size: 'normal',
    color: 'tertiary',
};

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    label: "No Label",
    size: 'normal'
};

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
    label: "No Label",
    size: 'normal'
};