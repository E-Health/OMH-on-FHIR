# mvn clean repackage
# Alpine-micro
FROM openjdk:alpine

# Locale
ENV LC_ALL="en_US.utf8"

# Copy jar-files
COPY target/mdataserver-0.0.1-SNAPSHOT.jar /home/app.jar

# Set workdir
WORKDIR /home

# Expose the port
EXPOSE 8080

# Launch jar-files
ENTRYPOINT exec java $JAVA_OPTS -jar /home/app.jar