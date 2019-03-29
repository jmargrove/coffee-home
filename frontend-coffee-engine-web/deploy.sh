#!/bin/bash 

echo Deploying website to S3 bucket 🚀

echo Are you sure you want to delete build? Yes/No
read action 

if [ $action == 'Yes' ]
then

bucketName=$(jq ".bucketName" bucket.config.json | tr -d \") 
bucketLocation=$(jq ".bucketLocation" bucket.config.json | tr -d \") 
buildLocation=$(jq ".buildLocation" bucket.config.json | tr -d \") 

aws s3 rm s3://$bucketName/ --recursive
# second upload build folder 
aws s3 cp $buildLocation/ s3://$bucketName/ --recursive

echo Deploying website to S3 bucket 🚀
echo http://$bucketName.s3-website-$bucketLocation.amazonaws.com

fi

if [$action == "No"]
then
echo Stopping deploying
fi