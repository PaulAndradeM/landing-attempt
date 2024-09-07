# Development Lifecycle

## 1 → Create a branch off of `develop` 🌿

Name the branch with the ticket ID pre-pended:  
**`CHA-1/cool-feature`**

## 2 → Writing code 🖥️

Create a commit for every useful piece of code. This could be:

- 🔄 Refactor of a flow
- ✨ A new small functionality added
- 📌 A subtask of a ticket

The commit message should follow this pattern: **TICKET-ID: Code change description**

e.g.:  
**CHA-2: Add function to fetch user addresses data**

## 3 → Test Code 🧪

Test the functionality added in the new branch you created. Also, test related functionalities that may be affected by the change.

## 4 → Create a pull request on GitHub ⬆️

Follow the guidelines:

[**Pull Request Template**](pull-request-template.md)

At least one review is required to merge the code.  
Resolve all conflicts with the `develop` branch before creating the PR.

## 5 → Merge PR ✅

Once the code is approved by at least one team member, merge the PR.
