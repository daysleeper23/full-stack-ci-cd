For this exercise I choose Kotlin as the target programming language.

# Context
A hypothetical situation where we have an application being worked on by a team of about 6 people. The application is in active development and will be released soon.

# Kotlin - Linting, Testing & Building

## Linting Kotlin
There are several tools among the ecosystem but Detekt is a promising one with rich feature set including custom rules, code smell analysis, complexity reports. This tool helps the team reducing potential technical debts for the long term.

## Testing Kotlin
JUnit 5 is a popular testing tool for Java ecosystem which Kotlin belongs to. JUnit can be used for unit testing, and can also be extended for integration testing.

## Building Kotlin
Perhaps the most popular build tool for Java ecosystem is Gradle. Therefore, using Gradle to build Kotlin app is an obvious choice. The tool supports all phases of a build process and allows the use of plugins to further expand the build configuration.


# Jenkins & Github Actions Alternatives

Among alternatives for Jenkins & Github Actions, I have used Gitlab CI/CD as it provides the ability to self-host a version control system for your organization.

Gitlab also allows building & running ci/cd pipelines in runners which help streamline the development & deployment process.

Another possible solution is Bitbucket from Atlassian.

Recently, GCP and AWS also offerer the CI/CD tools in their cloud platform, respectively Google Cloud Build and AWS CodeBuild. These options are suitable for teams and organizations that already used other services from GCP and AWS to simplify their workflow, moving the build process to their familiar cloud platform.


# Choosing between self-hosted and cloud-based environment

Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?

In my opinion, it really depends on the context in which the team is operating.

If this team belongs to a larger org that prioritizes security and compliance, a self-hosted version would be more appropriate. The team & its org can have full control over their source code, build process and the configuration.

However, many large orgs nowadays have been transitioning to cloud platforms for many parts of their system. So, a cloud-based is also suitable in this situation if the team is already using cloud services.

If this team is a small company / start-up which prioritizes speed, a cloud-based environment would definitely help them to move fast by making it simple to setup and start using the service.
