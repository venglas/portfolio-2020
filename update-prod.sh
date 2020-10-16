git pull
npm run build
cd /var/www/html
rm -rf *
cp -rf /root/projects/portfolio-2020/dist/* /var/www/html
echo Succesfully updated from branch:
cd /root/projects/portfolio-2020
git rev-parse --abbrev-ref HEAD
