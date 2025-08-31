import { defineField, defineType } from "sanity";
import { BiUser } from "react-icons/bi";

export default defineType({
  name: "author",
  title: "Author",
  type: "document",
  icon: BiUser,
  fields: [
    defineField({
      name: "name",
      title: "Author Name",
      type: "string",
    }),
    defineField({
      name: "photo",
      title: "Profile Photo",
      type: "image",
      description: "Upload a profile photo. Recommended size 320 x 320",
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
          description: "Describe this photo.",
        },
      ],
      options: {
        hotspot: true,
        metadata: ["lqip"],
      }
    }),
    defineField({
      name: "twitterUrl",
      title: "Twitter URL",
      type: "url"
    }),
  ],
});
