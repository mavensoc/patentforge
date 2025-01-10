import {onRequest} from "firebase-functions/v2/https";
import {onDocumentCreated} from "firebase-functions/v2/firestore";
import {logger} from "firebase-functions";

// HTTP function example
export const helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

// Firestore trigger function example
export const onPatentCreated = onDocumentCreated(
    "patents/{patentId}",
    (event) => {
      const snapshot = event.data;
      if (snapshot) {
        const newPatent = snapshot.data();
        logger.info(
            `New patent created: ${newPatent.title}`,
            {structuredData: true}
        );
        // You can add more logic here as needed
      }
    }
);

