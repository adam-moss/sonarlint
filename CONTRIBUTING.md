# Contributing

I'm glad you want to contribute to this project! This document will help answer common questions you may have during your first contribution.

## Submitting Issues

Not every contribution comes in the form of code. Submitting, confirming, and triaging issues is an important task for any project, as is documentation, testing, and example use cases.

I ask you not to submit security concerns via GitHub. For details on how to submit potential security issues please contact me on Twitter [@mr_adam_moss](https://twitter.com/mr_adam_moss)

## Contribution Process

I have a 3 step process for contributions:

1.  Fork my repo and commit changes to a new branch, making sure to sign-off those changes for the [Developer Certificate of Origin](#developer-certification-of-origin-dco).
2.  Create a GitHub Pull Request for your change, following the instructions in the pull request template (if present).
3.  A [Code Review](#code-review-process) will then be undertaken.

### Pull Request Requirements

I like to think my projects are built to last. I strive to ensure high quality throughout the experience. In order to ensure this, I require that all pull requests to my projects meet these specifications:

1.  **Tests:** To ensure high quality code and protect against future regressions, I require all code to have at least unit test coverage.
2.  **Green CI Tests:** I use CI systems to test all pull requests, although not all of these are publicly visible. I require these test runs to succeed on every pull request before being merged. Guidance will be provided if they find any issues.

### Code Review Process

Code review for public contributions takes place in GitHub pull requests. See [this article](https://help.GitHub.com/articles/about-pull-requests/) if you're not familiar with GitHub Pull Requests.

Once you open a pull request, a project maintainer will review your code and respond to your pull request with any feedback they might have. The process at this point is as follows:

1.  Two thumbs-up (:+1:) are required from project maintainers.
2.  When ready, your pull request will be tagged with label `Ready For Merge`.
3.  Your change will be merged into the project's `develop` branch and will be noted in the project's `CHANGELOG.md` at the time of release.

### Developer Certification of Origin (DCO)

Licensing is very important to open source projects. It helps ensure the software continues to be available under the terms that the author desired.

This project uses [the ISC license](LICENSE) to strike a balance between open contribution and allowing you to use the software however you would like to.

The license tells you what rights you have that are provided by the copyright holder. It is important that the contributor fully understands what rights they are licensing and agrees to them. Sometimes the copyright holder isn't the contributor, such as when the contributor is doing work on behalf of a company.

To make a good faith effort to ensure these criteria are met, I require the Developer Certificate of Origin (DCO) process to be followed.

The DCO is an attestation attached to every contribution made by every developer. In the commit message of the contribution, the developer simply adds a Signed-off-by statement and thereby agrees to the DCO, which you can find below or at <http://developercertificate.org/>.

```
Developer's Certificate of Origin 1.1

By making a contribution to this project, I certify that:

(a) The contribution was created in whole or in part by me and I
    have the right to submit it under the open source license
    indicated in the file; or

(b) The contribution is based upon previous work that, to the
    best of my knowledge, is covered under an appropriate open
    source license and I have the right under that license to   
    submit that work with modifications, whether created in whole
    or in part by me, under the same open source license (unless
    I am permitted to submit under a different license), as
    Indicated in the file; or

(c) The contribution was provided directly to me by some other
    person who certified (a), (b) or (c) and I have not modified
    it.

(d) I understand and agree that this project and the contribution
    are public and that a record of the contribution (including
    all personal information I submit with it, including my
    sign-off) is maintained indefinitely and may be redistributed
    consistent with this project or the open source license(s)
    involved.
```

#### DCO Sign-Off Methods

The DCO requires a sign-off message in the following format appear on each commit in the pull request:

```
Signed-off-by: Jane Doe <jane.doe@example.com>
```

The DCO text can either be manually added to your commit body, or you can add either **-signoff** or **-s** to your usual git commit commands. If you forget to add the sign-off you can also amend a previous commit with the sign-off by running **git commit –-amend --signoff --no-edit**. If you've pushed your changes to GitHub already you'll need to force push your branch after this with **git push --force**.

## Versioning

I follow the [Semantic Versioning](http://semver.org/) standard. The standard version numbers look like X.Y.Z which mean:

*   X is a major release, which may not be fully compatible with any prior major releases
*   Y is a minor release, which adds both new features and bug fixes
*   Z is a patch release, which just adds bug fixes

[ _this contribution guide is a derivative of [Contributing to CHEF Projects](https://github.com/chef/chef/blob/master/CONTRIBUTING.md) by [CHEF](https://www.chef.io/chef/), used under APL-2.0_ ]
