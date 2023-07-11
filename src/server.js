import { createServer } from "miragejs"
createServer({
    routes() {
      this.namespace = "api"
      this.logging = false
      this.get("/projects", () => {
        return {
          projects: [
            { id: "1", name: "Calculator", description: "Simple single page calculator on Vanilla js", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmfggCoWPDLd2S1aXJNGwm-sY7EkbrkThmdw&usqp=CAU", type: "simple" },
            { id: "2", name: "Calculator", description: "Simple single page calculator on Vanilla js", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmfggCoWPDLd2S1aXJNGwm-sY7EkbrkThmdw&usqp=CAU", type: "simple" },
            { id: "3",name: "Calculator", description: "Simple single page calculator on Vanilla js", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmfggCoWPDLd2S1aXJNGwm-sY7EkbrkThmdw&usqp=CAU", type: "simple" },
          ],
        }
      })
    },
  })