import { SidebarLink } from "@/types";

export const themes = [
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    label: "Home",
    route: "/",
    imgURL: "/assets/icons/home.svg",
  },
  {
    label: "Community",
    route: "/community",
    imgURL: "/assets/icons/users.svg",
  },
  {
    label: "Collections",
    route: "/collection",
    imgURL: "/assets/icons/star.svg",
  },
  {
    label: "Find Jobs",
    route: "/jobs",
    imgURL: "/assets/icons/suitcase.svg",
  },
  {
    label: "Tags",
    route: "/tags",
    imgURL: "/assets/icons/tag.svg",
  },
  {
    label: "Profile",
    route: "/profile",
    imgURL: "/assets/icons/user.svg",
  },
  {
    label: "Ask a question",
    route: "/ask-question",
    imgURL: "/assets/icons/question.svg",
  },
];

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};
