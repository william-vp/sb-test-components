import './mylabel.css';

export interface Props {
    /**
     *  Is the text of the label
     */
    label: string;
    /**
     *  Is the font size of the label
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     *  Is the color of the label
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     *  Capitalize all words in the label
     */
    allCaps?: boolean;
    /**
     *  Select the font color of the label
     */
    fontColor?: string;
    /**
     *  Select the background color of the label
     */
    backgroundColor?: string;
}

export const MyLabel = (
    {
        label = '', color, fontColor, backgroundColor= 'transparent',
        size = 'normal',
        allCaps = false,
    }: Props) => {
    return (
        <div>
            <h1 style={{color: fontColor, backgroundColor}}
                className={`label ${size} ${color ? 'text-' + color : ''}`}
            >
                {allCaps ? label.toUpperCase() : label}
            </h1>
        </div>
    );
}