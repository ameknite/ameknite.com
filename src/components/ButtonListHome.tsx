import { For } from "solid-js";
import { accent_color } from "../data/colors";
import { ButtonContainer } from "./ButtonList";

const ButtonList = ({ links }) => {
    return (
        <div class="button-list">
            <For each={links}>
                {(link) => (
                    <ButtonContainer
                        link={link}
                        border_color={accent_color}
                        is_color_default={true}
                    />
                )}
            </For>
        </div>
    );
};

export default ButtonList;
