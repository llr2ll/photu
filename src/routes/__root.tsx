import { DefaultNotFound } from "@/components/default/default-not-found";
import { HeadContent, createRootRoute } from "@tanstack/react-router";
import { DefaultBody } from "@/components/default/default-body";
import "../styles.css";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { charSet: "utf-8" },
      { title: "Photu" }
    ]
  }),
  notFoundComponent: DefaultNotFound,
  shellComponent: ({ children }: { children: React.ReactNode }) => 
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        <DefaultBody>{children}</DefaultBody>
        <script src="node_modules/eruda/eruda.js"></script>
        <script>eruda.init();</script>
      </body>
    </html>,
});