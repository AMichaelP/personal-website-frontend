T=personal-website-frontend
P=8080

default: run

build:
	podman build --rm -t $T .

run: build
	podman run -p $P:$P --name $T --rm --replace $T

build-dev:
	podman build --target dev --rm -t $T_dev .

dev: build-dev
	podman run -p $P:$P --name $T_dev --rm --replace $T_dev
