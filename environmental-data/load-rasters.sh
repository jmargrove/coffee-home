#!/bin/bash

endpoint=$(jq ".endpoint" database.config.json | tr -d \") 
username=$(jq ".username" database.config.json | tr -d \") 
databaseName=$(jq ".databaseName" database.config.json | tr -d \") 
port=$(jq ".port" database.config.json | tr -d \") 
password=$(jq ".password" database.config.json | tr -d \") 


echo "Is this the first interaction with the database? Do you want to config for rasters?"
read action 
if [$action == "yes"]
then 
# Need to enable the raster extentions for postgres => postgis
psql --host=$endpoint --username=$username --dbname=$databaseName -c "CREATE EXTENSION postgis;"
fi


echo Starting to load rainfall data 🌧️

  export PGPASSWORD=$password; raster2pgsql -s 4326 -I -C -M -d ./data/mean-monthly-rainfall/p01dwd1a.tif -t 225x225 public.prec1 | psql --host $endpoint --username $username --dbname $databaseName 

for i in {2..12}
do
  export PGPASSWORD=$password; raster2pgsql -s 4326 -I -C -M -d ./data/mean-monthly-rainfall/p0${i}dwd1a.tif -t 225x225 public.prec${i} | psql --host $endpoint --username $username --dbname $databaseName 
  psql $databaseName --command="ALTER TABLE prec$i INHERIT prec1";
done

echo Loaded rainfall data 🌧️
echo Starting to load temperature average data 🌡️
export PGPASSWORD=$password; raster2pgsql -s 4326 -I -C -M -d ./data/wc2.0_30s_tavg/wc2.0_30s_tavg_01.tif -t 1350x1350  public.tavg1 | psql --host $endpoint --username $username --dbname $databaseName 

for i in {2..12}
do
export PGPASSWORD=$password; raster2pgsql -s 4326 -I -C -M -d ./data/wc2.0_30s_tavg/wc2.0_30s_tavg_0${i}.tif -t 1350x1350  public.tavg${i} | psql --host $endpoint --username $username --dbname $databaseName 
psql $databaseName --command="ALTER TABLE tavg$i INHERIT tavg1";
done

echo Loaded temperature average data 🌡️
echo Starting to load temperature min data 🌡️
export PGPASSWORD=$password; raster2pgsql -s 4326 -I -C -M -d ./data/wc2.0_30s_tmin/wc2.0_30s_tmin_01.tif -t 1350x1350 public.tmin1 | psql --host $endpoint --username $username --dbname $databaseName

for i in {2..12}
do
export PGPASSWORD=$password;  raster2pgsql -s 4326 -I -C -M -d ./data/wc2.0_30s_tmin/wc2.0_30s_tmin_0${i}.tif -t 1350x1350 public.tmin${i} | psql --host $endpoint --username $username --dbname $databaseName 
psql $databaseName --command="ALTER TABLE tmin$i INHERIT tmin1";
done

echo Loaded temperature min data 🌡️
echo Starting to load temperature max data 🌡️

export PGPASSWORD=$password; raster2pgsql -s 4326 -I -C -M -d ./data/wc2.0_30s_tmax/wc2.0_30s_tmax_01.tif -t 1350x1350 public.tmax1 | psql --host $endpoint --username $username --dbname $databaseName 

for i in {2..12}
do
export PGPASSWORD=$password; raster2pgsql -s 4326 -I -C -M -d ./data/wc2.0_30s_tmax/wc2.0_30s_tmax_0${i}.tif -t 1350x1350 public.tmax${i} | psql --host $endpoint --username $username --dbname $databaseName 
psql $databaseName --command="ALTER TABLE tmax$i INHERIT tmax1";
done

echo Loaded temperature max data 🌡️
echo Starting to load solar radiation data ☀️
raster2pgsql -s 4326 -I -C -M -d ./data/wc2.0_30s_srad/wc2.0_30s_srad_01.tif -t 1350x1350 public.srad1 | psql --host $endpoint--username $username --dbname $databaseName 

for i in {2..12}
do
raster2pgsql -s 4326 -I -C -M -d ./data/wc2.0_30s_srad/wc2.0_30s_srad_0${i}.tif -t 1350x1350 public.srad${i} | psql --host $endpoint--username $username --dbname $databaseName 
psql $databaseName --command="ALTER TABLE srad$i INHERIT srad1";
done

echo Loaded solar radiation data ☀️
echo Completed the upload 🚀