import React from "react";

import { useState } from "react";
import TabButton from "./TabButton.tsx";
import AboutTab from "./AboutTab.tsx";
import PostsTab from "./PostsTab.tsx";
import ContactTab from "./ContactTab.tsx";

export default function TabContainer() {
  const [tab, setTab] = useState("about");
  return (
    <>
      <TabButton isActive={tab === "about"} action={() => setTab("about")}>
        About
      </TabButton>
      <TabButton isActive={tab === "posts"} action={() => setTab("posts")}>
        Posts (slow)
      </TabButton>
      <TabButton isActive={tab === "contact"} action={() => setTab("contact")}>
        Contact
      </TabButton>
      <hr />
      {tab === "about" && <AboutTab />}
      {tab === "posts" && <PostsTab />}
      {tab === "contact" && <ContactTab />}
    </>
  );
}
