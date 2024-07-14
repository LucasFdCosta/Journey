# The Backend of Journey, an application about travel management
The purpose of this application is to help manage trips with friends.

# Endpoints Documentation

## /api/Trips

### POST /api/Trips

- **Tags**: Trips
- **Request Body**:
  - **Content Types**:
    - `application/json`
    - `text/json`
    - `application/*+json`
  - **Example**:
    ```json
    {
      "name": "Summer Vacation",
      "startDate": "2024-07-01T00:00:00Z",
      "endDate": "2024-07-10T00:00:00Z"
    }
    ```
- **Responses**:
  - **201 Created**:
    - **Content Types**:
      - `text/plain`
      - `application/json`
      - `text/json`
    - **Example**:
      ```json
      {
        "id": "123e4567-e89b-12d3-a456-426614174000",
        "name": "Summer Vacation",
        "startDate": "2024-07-01T00:00:00Z",
        "endDate": "2024-07-10T00:00:00Z"
      }
      ```
  - **400 Bad Request**:
    - **Content Types**:
      - `text/plain`
      - `application/json`
      - `text/json`
    - **Example**:
      ```json
      {
        "errors": [
          "Invalid date format",
          "Name cannot be empty"
        ]
      }
      ```

### GET /api/Trips

- **Tags**: Trips
- **Responses**:
  - **200 Success**:
    - **Content Types**:
      - `text/plain`
      - `application/json`
      - `text/json`
    - **Example**:
      ```json
      {
        "trips": [
          {
            "id": "123e4567-e89b-12d3-a456-426614174000",
            "name": "Summer Vacation",
            "startDate": "2024-07-01T00:00:00Z",
            "endDate": "2024-07-10T00:00:00Z"
          },
          {
            "id": "223e4567-e89b-12d3-a456-426614174001",
            "name": "Winter Getaway",
            "startDate": "2024-12-15T00:00:00Z",
            "endDate": "2024-12-22T00:00:00Z"
          }
        ]
      }
      ```

## /api/Trips/{id}

### GET /api/Trips/{id}

- **Tags**: Trips
- **Parameters**:
  - **Path Parameter**:
    - `id` (string, format: uuid, required)
- **Responses**:
  - **200 Success**:
    - **Content Types**:
      - `text/plain`
      - `application/json`
      - `text/json`
    - **Example**:
      ```json
      {
        "id": "123e4567-e89b-12d3-a456-426614174000",
        "name": "Summer Vacation",
        "startDate": "2024-07-01T00:00:00Z",
        "endDate": "2024-07-10T00:00:00Z",
        "activities": [
          {
            "id": "223e4567-e89b-12d3-a456-426614174001",
            "name": "Beach Day",
            "date": "2024-07-03T10:00:00Z",
            "status": 0
          }
        ]
      }
      ```
  - **404 Not Found**:
    - **Content Types**:
      - `text/plain`
      - `application/json`
      - `text/json`
    - **Example**:
      ```json
      {
        "errors": [
          "Trip not found"
        ]
      }
      ```

### DELETE /api/Trips/{id}

- **Tags**: Trips
- **Parameters**:
  - **Path Parameter**:
    - `id` (string, format: uuid, required)
- **Responses**:
  - **204 No Content**
  - **404 Not Found**:
    - **Content Types**:
      - `text/plain`
      - `application/json`
      - `text/json`
    - **Example**:
      ```json
      {
        "errors": [
          "Trip not found"
        ]
      }
      ```

## /api/Trips/{tripId}/activity

### POST /api/Trips/{tripId}/activity

- **Tags**: Trips
- **Parameters**:
  - **Path Parameter**:
    - `tripId` (string, format: uuid, required)
- **Request Body**:
  - **Content Types**:
    - `application/json`
    - `text/json`
    - `application/*+json`
  - **Example**:
    ```json
    {
      "name": "Hiking",
      "date": "2024-07-05T08:00:00Z"
    }
    ```
- **Responses**:
  - **201 Created**:
    - **Content Types**:
      - `text/plain`
      - `application/json`
      - `text/json`
    - **Example**:
      ```json
      {
        "id": "323e4567-e89b-12d3-a456-426614174002",
        "name": "Hiking",
        "date": "2024-07-05T08:00:00Z",
        "status": 0
      }
      ```
  - **400 Bad Request**:
    - **Content Types**:
      - `text/plain`
      - `application/json`
      - `text/json`
    - **Example**:
      ```json
      {
        "errors": [
          "Date cannot be in the past"
        ]
      }
      ```
  - **404 Not Found**:
    - **Content Types**:
      - `text/plain`
      - `application/json`
      - `text/json`
    - **Example**:
      ```json
      {
        "errors": [
          "Trip not found"
        ]
      }
      ```

## /api/Trips/{tripId}/activity/{activityId}/finish

### PUT /api/Trips/{tripId}/activity/{activityId}/finish

- **Tags**: Trips
- **Parameters**:
  - **Path Parameters**:
    - `tripId` (string, format: uuid, required)
    - `activityId` (string, format: uuid, required)
- **Responses**:
  - **204 No Content**
  - **404 Not Found**:
    - **Content Types**:
      - `text/plain`
      - `application/json`
      - `text/json`
    - **Example**:
      ```json
      {
        "errors": [
          "Activity not found"
        ]
      }
      ```

## /api/Trips/{tripId}/activity/{activityId}

### DELETE /api/Trips/{tripId}/activity/{activityId}

- **Tags**: Trips
- **Parameters**:
  - **Path Parameters**:
    - `tripId` (string, format: uuid, required)
    - `activityId` (string, format: uuid, required)
- **Responses**:
  - **204 No Content**
  - **404 Not Found**:
    - **Content Types**:
      - `text/plain`
      - `application/json`
      - `text/json`
    - **Example**:
      ```json
      {
        "errors": [
          "Activity not found"
        ]
      }
      ```