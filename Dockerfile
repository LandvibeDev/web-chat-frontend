# docker build -t front .
# docker run --name front -v front:/front front
FROM ubuntu
COPY ./build/ /home/front/

ENTRYPOINT ["cp", "-r", "-f", "/home/front", "/"]
