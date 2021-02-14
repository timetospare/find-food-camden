const config = {
  type: "service_account",
  project_id:
    process.env.NODE_ENV === "production"
      ? "timetospare-123"
      : "timetospare-staging",
  private_key_id:
    process.env.NODE_ENV === "production"
      ? "7fede2e85fb43526e80f7bf46007d05141e0aad3"
      : "55c2e5218dffdd4f34fb5a381343efbee018d41c",
  private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  client_email:
    process.env.NODE_ENV === "production"
      ? "firebase-adminsdk-tni20@timetospare-123.iam.gserviceaccount.com"
      : "firebase-adminsdk-mh23c@timetospare-staging.iam.gserviceaccount.com",
  client_id:
    process.env.NODE_ENV === "production"
      ? "105376457946944456560"
      : "103483576884795968720",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    process.env.NODE_ENV === "production"
      ? "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-tni20%40timetospare-123.iam.gserviceaccount.com"
      : "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-jzbrw%40quizlime-app.iam.gserviceaccount.com",
};

export default config;
