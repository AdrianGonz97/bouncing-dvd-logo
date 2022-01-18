import { publish } from "gh-pages";

publish(
    "dist", // path to public directory
    {
        branch: "gh-pages",
        repo: "https://github.com/AdrianGonz97/bouncing-dvd-logo.git",
        user: {
            name: "Adrian",
            email: "cokakoala.dev@gmail.com",
        },
        dotfiles: true,
    },
    () => {
        console.log("Deploy Complete!");
    }
);
