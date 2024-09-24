# Stage 1: Build the Django application
FROM python:3.10-slim AS builder

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE = 1
ENV PYTHONUNBUFFERED = 1

# Set work directory
WORKDIR /code

# Install dependencies
COPY requirements.txt /code/
RUN pip install --no-cache-dir -r requirements.txt

# Copy project files
COPY . /code/

# Collect static files
RUN python manage.py collectstatic --noinput

# Stage 2: Run the Django application with Waitress
FROM python:3.10-slim

# Set environment variables for the runtime stage
ENV PYTHONDONTWRITEBYTECODE = 1
ENV PYTHONUNBUFFERED = 1

# Set work directory
WORKDIR /code

# Install Waitress
# RUN pip install --no-cache-dir waitress

# Install dependencies
COPY requirements.txt /code/
RUN pip install --no-cache-dir -r requirements.txt

# Copy project files from the builder stage
COPY --from=builder /code /code

# Expose port 8000
EXPOSE 8000

# Run the application
CMD ["waitress-serve", "--port=8000", "djangoproject.wsgi:application"]