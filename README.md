# GitHub User Activity CLI

A simple command line interface to fetch and display a GitHub user's recent activity in the terminal.

Project URL: https://roadmap.sh/projects/github-user-activity

## Requirements

- Node.js

## Setup

```bash
git clone <your-repo-url>
cd github-user-activity
```

## Usage

```bash
node app.js <username>
```

### Examples

```bash
# Fetch activity for a GitHub user
node app.js torvalds

# Output:
# Pushed 3 commits to torvalds/linux
# Starred torvalds/linux
# Opened an issue in torvalds/linux
# ...
```

## Features

- Displays recent GitHub activity for any public user
- Handles different event types:
  - Push events
  - Issue events
  - Star events
  - Create events
  - Member events
- Handles errors gracefully (invalid username, API failures)
