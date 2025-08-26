# https://catalog.redhat.com/software/containers/ubi10/nodejs-22-minimal/677d186b5fdd0fab2f7a59ba
FROM registry.access.redhat.com/ubi10/nodejs-22-minimal@sha256:a48d713a8a25c1ee1de79bb261f38e3ae377f172989a4402e19f3a15b070d74f AS base
USER 0
ADD src /tmp/src/
RUN /usr/bin/fix-permissions /tmp/src
USER 1001
RUN /usr/libexec/s2i/assemble
CMD /usr/libexec/s2i/run

FROM base AS lint
ENV NPM_RUN lint

FROM lint AS build
ENV NPM_RUN build

FROM build AS dev
ENV NPM_RUN dev

FROM build AS start
ENV NPM_RUN start

FROM start AS default