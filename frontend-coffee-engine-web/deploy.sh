#!/bin/bash 

echo Deploying website to S3 bucket 🚀

echo Are you sure you want to delete build? Yes/No
read action 
echo $action 

if [ $action == 'Yes' ]
then


echo What is the bucket\'s name? 
read bucketName 

echo What is the buckets location?
read bucketLocation 

echo What is the build file location \(probs build\)?
read buildLocation

#first delete s3 bucket content

aws s3 rm s3://$bucketName/ --recursive
# second upload build folder 
aws s3 cp $buildLocation/ s3://$bucketName/ --recursive

echo Deploying website to S3 bucket 🚀
echo http://$bucketName.s3-website-$bucketLocation.amazonaws.com

fi

if [$action == "No"]
echo Stopping deploying
