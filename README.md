## Quick Start

Install the executable. The executable's major version will match Express's:

Install dependencies:

```bash
$ npm install
```

Start the server:

```bash
$ npm start
```

## JSON Objects returned by API:

Make sure the right content type like `Content-Type: application/json; charset=utf-8` is correctly returned.

### Single File

## Get api/uploads/:id

```JSON
{
  "file": {
            "name": "commit-msg.sample",
            "size": 896,
            "url": "https://filespin-assessment.s3.ap-south-1.amazonaws.com/uploads/a496336b-dcef-496d-a742-eb8c718bf378",
            "startTime": "2020-11-01T05:32:26.028Z",
            "endTime": "2020-11-01T05:32:26.756Z",
            "createdAt": "2020-11-01T05:32:29.126Z",
            "updatedAt": "2020-11-01T05:32:29.126Z"
        }
}
```

### Multiple Files

## Get api/uploads

```JSON
{
  "files":[ {
            "name": "commit-msg.sample",
            "size": 896,
            "url": "https://filespin-assessment.s3.ap-south-1.amazonaws.com/uploads/a496336b-dcef-496d-a742-eb8c718bf378",
            "startTime": "2020-11-01T05:32:26.028Z",
            "endTime": "2020-11-01T05:32:26.756Z",
            "createdAt": "2020-11-01T05:32:29.126Z",
            "updatedAt": "2020-11-01T05:32:29.126Z"
        },
        {
            "name": "pre-rebase.sample",
            "size": 4898,
            "url": "https://filespin-assessment.s3.ap-south-1.amazonaws.com/uploads/1a951b15-d6bc-47ca-9175-c93c3eacf86c",
            "startTime": "2020-11-01T08:43:37.989Z",
            "endTime": "2020-11-01T08:43:39.024Z",
            "createdAt": "2020-11-01T08:43:39.974Z",
            "updatedAt": "2020-11-01T08:43:39.974Z"
        },
  }],
  "filesCount": 2
}
```

## Endpoints:

### Get File

`GET /api/uploads/:id`

No authentication required, will return [single file](#single-file)

### Create File

`POST /api/uploads`

Example request body:

```JSON
{
    "name": "commit-msg.sample",
    "size": 896,
    "url": "https://filespin-assessment.s3.ap-south-1.amazonaws.com/uploads/a496336b-dcef-496d-a742-eb8c718bf378",
    "startTime": "2020-11-01T05:32:26.028Z",
    "endTime": "2020-11-01T05:32:26.756Z",

}
```

Authentication required, will return an [File](#single-file)

Required fields: `name`, `url`, `size`, `startTime`, `endTime`

### List Articles

`GET /api/uploads`

Returns most recent files globally by default.
