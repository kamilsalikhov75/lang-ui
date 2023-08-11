import { icons } from "./icons";
import { Lang } from "./store/slices/lang";

interface ILanguage {
  value: Lang;
  icon: string;
}

export const languages: ILanguage[] = [
  {
    value: "ru",
    icon: icons.ruIcon,
  },
  {
    value: "en",
    icon: icons.enIcon,
  },
];
