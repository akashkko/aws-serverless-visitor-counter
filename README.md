# aws-serverless-visitor-counter
Built a fully serverless visitor counter on AWS using S3, CloudFront, API Gateway, Lambda, and DynamoDB. The project tracks website visits in real time through a serverless backend architecture while serving a custom frontend through AWS CDN infrastructure. Developed to strengthen practical cloud engineering and AWS integration skills.

# AWS Serverless Visitor Counter

A fully serverless visitor counter web application built on AWS using S3, CloudFront, API Gateway, Lambda, and DynamoDB.

---

## Architecture

![Architecture]<img width="1096" height="797" alt="image" src="https://github.com/user-attachments/assets/e2add15c-7d6b-412d-ade9-3030435b3323" />


---

## Features

- Serverless architecture
- Real-time visitor tracking
- REST API integration
- CDN delivery using CloudFront
- NoSQL database with DynamoDB
- Responsive frontend hosted on S3
- HTTPS-enabled deployment

---

## AWS Services Used

| Service | Purpose |
|---|---|
| S3 | Static frontend hosting |
| CloudFront | CDN and HTTPS delivery |
| API Gateway | REST API routing |
| Lambda | Serverless backend logic |
| DynamoDB | Visitor count storage |

---

## Frontend Preview

![Frontend]<img width="1920" height="950" alt="image" src="https://github.com/user-attachments/assets/47689910-8c1e-460d-b2fa-80caed03962e" />


---

## Project Flow

1. User accesses website through CloudFront
2. Static frontend is served from S3
3. Frontend sends request to API Gateway
4. API Gateway triggers Lambda function
5. Lambda retrieves and updates visitor count in DynamoDB
6. Updated count is returned to frontend

---

## Challenges Faced

- DynamoDB reserved keyword conflicts
- CloudFront caching issues
- IAM permission configuration
- API Gateway CORS configuration
- Lambda debugging using CloudWatch logs

---

## Lessons Learned

This project strengthened my understanding of:
- serverless architecture
- AWS networking and integrations
- API design
- cloud debugging workflows
- CDN caching behaviour
- IAM permissions and security

---

## Live Demo


https://dpmrnuzkih799.cloudfront.net/

---

## Author

Akash Krishna Kumar
